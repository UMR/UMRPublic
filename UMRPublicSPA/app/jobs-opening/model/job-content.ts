export class JobContent {
    public JobContentId: number;
    public JobTitle: string;
    public NoOfVacancies: string;
    public JobDescription: string;
    public JobNature: string;
    public EducationalRequirements: string;
    public ExperienceRequirements: string;
    public AdditionalJobRequirements: string;
    public JobLocation: string;
    public SalaryRange: string;
    public OtherBenefits: string;
    public EmailCV: string;
    public SpecialInstruction: string;
    public ApplicationDeadline: string;
    public HalfContent: string;
    public SecondHalf: string;

    //get halfContent(): string {
    //    var len = this.JobDescription.length;
    //    console.log('From Object: ' + this._halfContent.substring(0, len / 2));
    //    return this._halfContent.substring(0, len / 2);
    //}
    //set halfContent(halfContent: string) {
    //    this._halfContent = halfContent;
    //}        
}

export interface ColumnOptions {
    header: string,
    field: string,
    sortable: boolean
};

export interface GridColumns {
    JobContentId: number,
    JobTitle: string
};

export interface GridConfiguration {
    page: number,
    pageSize: number,
    sort: string,
    order: number
};