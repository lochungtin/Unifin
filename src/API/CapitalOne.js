const key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJuYmYiOjE2MDQ0NzY4MDAsImFwaV9zdWIiOiJkMTA1MzE4N2MzZTgwMTdlNTYyZTljZDNiYjc1NTFkZTkyZWMwOTk0MzUxZDZjMGQ4MDk4ZjgwMzIwZDM3YzQ4MTYwNDg3OTk5OTAwMCIsInBsYyI6IjVkY2VjNzRhZTk3NzAxMGUwM2FkNjQ5NSIsImV4cCI6MTYwNDg3OTk5OSwiZGV2ZWxvcGVyX2lkIjoiZDEwNTMxODdjM2U4MDE3ZTU2MmU5Y2QzYmI3NTUxZGU5MmVjMDk5NDM1MWQ2YzBkODA5OGY4MDMyMGQzN2M0OCJ9.DlJp7O9wEpQbT6_TdCuOK0TwQLLDvOoxOfKw2JsON8nlDtCq42QRaYc1kAXdfzZfwuCkioey5ymXFdovjXKB4R1IHTpqvj7VNpwDfIrSNFYztecP14gbyMLnGJCEYV9JA1LXuCw89aOw-xHAmVPXuuAgDNOEGxWEYCEtbi2GZLIIlHlZc7rKtpYiZnJZrXKuYllxBWESnSMYF-RJUiGdsqydIeXeTrQ_Cu3b9uEjpAqJrQ4Wk7l4L0cxe8wNxE3qqSAnsnGO6hNmVaDEQ05H_AcHnxS3VmrSVD2PfKoRiaPM9C45wa_FAMHeTlRBozPgg6MPyDSopLrx25-3FWN3UA';

export const createAccount = async () => {
    const search = await fetch('https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/accounts/create',
        {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + key,
                'version': '1.0'
            }),
            body: JSON.stringify({ 'quantity': 1 })
        }
    ).then(res => res.json());
    return search;
}

export const genTransactions = async (userID) => {
    var api = 'https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/transactions/accounts/' + userID + '/create';
    var opt = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + key,
            'version': '1.0'
        }),
        body: JSON.stringify({ 'quantity': 10 })
    };
    try {
        const search = await fetch(api, opt).then(res => res.json());
        return search;
    }
    catch {
        return {Transactions: []};
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchRecords = async (userID) => {
    try {
        const search = await fetch('https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/transactions/accounts/' + userID + '/transactions',
            {
                headers: new Headers({
                    'Authorization': 'Bearer ' + key,
                    'version': '1.0'
                })
            }
        ).then(res => res.json());
        return search;
    }
    catch {
        return [];
    }
}