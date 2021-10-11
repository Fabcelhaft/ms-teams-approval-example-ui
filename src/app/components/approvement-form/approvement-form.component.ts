import {Component, Input, OnInit} from '@angular/core';
import {Approvement} from "../../interfaces/approvement";
import {Approver} from "../../interfaces/approver";
import {PostApprovementService} from "../../services/post-approvement.service";
import {MessageService} from "primeng/api";

@Component({
    selector: 'dskb-approvement-form',
    templateUrl: './approvement-form.component.html',
    styleUrls: ['./approvement-form.component.scss']
})
export class ApprovementFormComponent implements OnInit {

    @Input() approvement: Approvement = {
        name: "",
        description: "",
        approvers: "",
        allApproversNeeded: false
    }

    approvers: Approver[] = [
        {
            friendlyName: "Fabian Lemke",
            id: "lemke@fabcelhaft.net"
        },
        {
            friendlyName: "Marcel Kersten",
            id: "mrcl_kersten@fabcelhaft.net"
        }];

    constructor(private postApprovementService: PostApprovementService, private messageService: MessageService) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.messageService.add({
            key: 'client',
            sticky: true,
            severity: 'warn',
            summary: 'Genehmigung versenden',
            detail: 'Wollen Sie wirklich forfahren?'
        });
    }

    onReject() {
        this.messageService.clear('client');
        this.messageService.add({severity: 'warn', summary: 'Abgebrochen', detail: "Der Vorgang wurde abgebrochen"});
    }

    onConfirm() {
        this.messageService.clear('client');
        this.postApprovementService.postApprovement(this.approvement);
    }

    onClear() {
        this.approvement = {
            name: "",
            description: "",
            approvers: "",
            allApproversNeeded: false
        };
        this.messageService.add({severity: 'info', summary: 'Zurückgesetzt', detail: "Die Eingaben wurden zurückgesetzt"});
    }
}
