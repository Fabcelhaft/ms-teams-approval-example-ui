import {Injectable} from '@angular/core';
import {MessageService} from "primeng/api";
import {HttpClient} from "@angular/common/http";
import {Approvement} from "../interfaces/approvement";

@Injectable({
    providedIn: 'root'
})
export class PostApprovementService {

    constructor(private messageService: MessageService, private httpClient: HttpClient) {
    }

    postApprovement(approvement: Approvement) {

        let patchedApprovement: Approvement = {
            name: approvement.name,
            description: approvement.description,
            approvers: "",
            allApproversNeeded: approvement.allApproversNeeded
        }

        for (let approver of approvement.approvers) {
            patchedApprovement.approvers += approver + ","
        }
        patchedApprovement.approvers = patchedApprovement.approvers.substring(0, patchedApprovement.approvers.length - 1);

        this.httpClient
            .post<any>("/approvements/gui", patchedApprovement)
            .subscribe(
                () => {},
                err => {
                    console.log(err);
                    this.messageService.add({severity: 'error', summary: 'Fehlgeschlagen', detail: err.statusText});
                },
                () => this.messageService.add({
                    severity: 'success',
                    summary: 'Abgeschlossen',
                    detail: 'Die Genehmigung wurde erfolgreich angefragt'
                })
            );
    }
}
