const key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJuYmYiOjE2MDQ0NzY4MDAsImFwaV9zdWIiOiI0ZTU5NWMyZWY5OWQwZmYwY2YxNDAxMzNmYzY1ZGFkY2RmMDdiZmE2NGRmYmNlNTRiOWVkMjA1MTU0ZDE4YWY5MTYwNDg3OTk5OTAwMCIsInBsYyI6IjVkY2VjNzRhZTk3NzAxMGUwM2FkNjQ5NSIsImV4cCI6MTYwNDg3OTk5OSwiZGV2ZWxvcGVyX2lkIjoiNGU1OTVjMmVmOTlkMGZmMGNmMTQwMTMzZmM2NWRhZGNkZjA3YmZhNjRkZmJjZTU0YjllZDIwNTE1NGQxOGFmOSJ9.axxWldCX6XRpKa6MNehBcjoOAJL3ehMYzafDpGKKE_PvriJSyd1tRXWeFBXnYGnFtqJ6QnKjrUEW1rSrSB4ce1s5AzdQYapZCDAR-NHnPNVAxvdiO1Uxn-_HicfkfCBlL_tG13eFvWEpAZ_NTTdT6V94bjYmIgW-bfGU4pByUAlbwaGz_pkLeIpmTnfLi-v0OVhcIghHage8Dnn1X6CytQjAg4Pv49wF47tRpzEDxb1FM8vK_iBnu3KiFBnF77NV1dYdOYHZVQn3ghB8qZYplx08fU7hOk3dA7KgsFGFIxe-OBMpTUazcl91frAgDuAxtTTXK9l60lyQ7M-nbvu99g';

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
    try {
        const search = await fetch('https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/transactions/accounts/' + userID + '/create',
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + key,
                    'version': '1.0'
                }),
                body: JSON.stringify({ 'quantity': 10 })
            }
        ).then(res => res.json());
        return search;
    }
    catch {
        return [];
    }
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