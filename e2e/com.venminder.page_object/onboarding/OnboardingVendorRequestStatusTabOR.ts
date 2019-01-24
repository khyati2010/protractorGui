import { element, by } from 'protractor';
import { stat } from 'fs';

export class OnboardingVendorRequestStatusTabOR {

    static vendorInformationSection = element(by.id("vendorInfoSection"));
    static vendorNameInfoSection = element(by.xpath(".//*[@id='vendorInfoSection']/div/div/ul/li[1]"))
    static headerVendorName = element(by.id("vendor-info__text-vendor-name"));
    static vmoInformationSection = element(by.id("vmoInfoSection"));
    static vmoManagerDetail = element(by.xpath(".//*[@id='vmoInfoSection']/div/div/ul/li[4]"));
    static vmoAssign = element(by.id("AssignVmo"));
    static vmoManagerAssignModal = element(by.id("vmo-selection-model-container"));
    static vmoManagerAssignModalTitle = element(by.xpath("//*[contains(text(),'Assign VMO Manager')]"))
    static selectVmoManagerDropdown = element(by.css("select option:nth-child(2)"));
    static submitVmoManagerModalBtn = element(by.id("vmo-selection__submit-btn"))
    static vmoManagerReassignModalTitle = element(by.xpath("//*[contains(text(),'Reassign VMO Manager')]"));
    static currentManagerLbl = element(by.xpath("//*[@id='vmo-selection-model-container']/ux-dialog-body/div[1]/div/form/div[1]/label"))
    static vendorNotesSection = element(by.xpath(".//*[@id='status']/div[2]/div[1]/vendor-notes/div"));
    static noNoteInNotesSection = element(by.id("noNotes"));
    static addNotes = element(by.id("addNote"));
    static addNoteModal = element(by.id("add-note"));
    static addNoteSubmitBtn = element(by.id("add-notes-btn"));
    static addNoteCloseBtn = element(by.id("add-notes-close"));
    static notesDescriptionArea = element(by.id("notes-description-area"));
    static notesTbl = element(by.id("notes-table"));
    static notesExpandBtn = element(by.id("notes-expand-icon"));
    static expandedNotesTbl = element(by.className("table table-responsive expanded-notes-table"));
    static expandedAddNoteBtn = element(by.id("add-note-btn-expanded-view"));
    static requirementStatusModal = element(by.id("requirementStatusInfoSection"));
    static requirementStatuslist = (index) => element(by.id("statusSection_" + index));
    static requirementAssignmentList = (index) => element(by.id("assignmentSection_" + index));

} 