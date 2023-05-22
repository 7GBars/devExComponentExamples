import React from 'react';

interface CompanyData {
    City: string;
    State: string;
    Zipcode: string;
    Address: string;
    Phone: string;
    Fax: string;
    Website: string;
}

export const CompanyItem: React.FC<{ data: CompanyData }> = ({ data }) => {
    return (
        <div>
            <div className="tabpanel-item">
                <div>
                    <p>
                        <b>{ data.City } </b>
                        (<span>{ data.State }</span>)
                    </p>
                    <p>
                        <span>{ data.Zipcode } </span>
                        <span>{ data.Address }</span>
                    </p>
                </div>
                <div>
                    <p>
                        Phone: <b>{ data.Phone }</b>
                    </p>
                    <p>
                        Fax: <b>{ data.Fax }</b>
                    </p>
                    <p>
                        Website: <a
                        href={data.Website}
                        target="_blank"
                        rel="noopener noreferrer">
                        { data.Website }
                    </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

