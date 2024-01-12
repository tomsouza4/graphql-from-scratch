
const properties = [
    {
        description: 'A big house',
        address: {
            street: '123 Elm St',
            city: 'Miami',
            state: 'FL',
            zipCode: '33137'
        },
        available: true
    },
    {
        description: 'A big pink house with yellow people',
        address: {
            street: '321 Evergreen Lane',
            city: 'Springfield',
            state: 'MO',
            zipCode: '44212'
        },
        available: false
    }
]

export const resolvers = {
    Query: {
        availableProperties: async (_, args) => {
            // return properties.filter(p => p.available);
            const { city } = args;
            return properties.filter(p => p.address.city === city);
        }
    }
};
