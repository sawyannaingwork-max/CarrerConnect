// Type for job
export interface Job {
    job_id : string,
    job_title : string,
    employer_name : string,
    employer_logo : string | null,
    employer_website : string | null,
    job_publisher : string,
    job_employment_type : string,
    job_employment_types : string[],
    job_apply_link : string,
    apply_options : ApplyOption[],
    job_description : string,
    job_is_remote : boolean,
    job_posted_at : string | null,
    job_location : string,
    job_city : string | null,
    job_country : string,
    job_benefits : null | string[],
    job_salary : number  | null,
    job_min_salary : number | null,
    job_max_salary : number | null,
    job_salary_period : string | null,
    job_highlights : {
        Qualifications? : string[],
        Benefits? : string[],
        Responsibilities? : string[],
    }
}

// Type for job search response
export interface JobSearchResponse {
    data : Job[]
}

// Type for apply option
interface ApplyOption {
    publisher : string,
    apply_link : string
}


// Type for employer review
interface EmployerReview {
    publisher : string,
    employer_name : string,
    score : number,
    num_stars : number,
    review_count : number,
    max_score : number,
    reviews_link : string
}

// Type for job Detail
export interface JobDetail extends Job {
    employer_reviews? : EmployerReview[]
}

// Type for job search form 
export interface JobSearchType {
    query? : string,
    country? : string,
    date? : string,
    requirements? : string
}

// Type for country response
export interface CountryResponse {
    data : Country[]
}

// Type for country
export interface Country {
    iso2 : string,
    iso3 : string,
    country : string
}

// Type for saved job
export interface SavedJob {
    job_id : string,
    job_title : string,
    employer_name : string,
    job_salary : number  | null,
    job_min_salary : number | null,
    job_max_salary : number | null,
    job_salary_period : string | null,
    job_publisher : string,
    job_posted_at : string | null,
    job_employment_type : string,
}