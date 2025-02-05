const PocketBase = require('pocketbase').default;

(async () => {
    const pb = new PocketBase("http://127.0.0.1:8090");
    try {
        const record = await pb.collection('newsletter_signups').create({
            email: 'test@example.com',
            first_name: 'Test',
            last_name: 'User',
        });
        console.log("Record created:", record);
    } catch (error) {
        console.error("Error:", error);
    }
})();
