import mongoose from "mongoose";

// Function to get the last 10 dates as strings in YYYY-MM-DD format
const getLastTenDates = () => {
    const today = new Date();
    const dates = [];
    for (let i = 9; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateString = date.toISOString().split('T')[0];
        dates.push(dateString);
    }
    return dates;
};

const AdminSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        college: String,
        password: String,
        soldOut: { type: Number, default: 0 },
        activity: {
            labels: { type: Array, default: getLastTenDates() }, // Set default to last 10 dates
            values: { type: Array, default: [5, 8, 12, 6, 10, 15, 20, 25, 30, 35] }, // Adjust default values accordingly
        },
        reportedAds: { type: Number, default: 0 }
    }
);

// Middleware to update activity labels and values before saving
AdminSchema.pre('save', function(next) {
    const today = new Date().toISOString().split('T')[0];
    const labels = this.activity.labels;
    const values = this.activity.values;

    // Check if today's date is already present in labels
    const todayIndex = labels.findIndex(label => label === today);

    // If today's date is not present, add it as a new label
    if (todayIndex === -1) {
        // Shift labels and values to the left
        labels.shift();
        values.shift();

        // Add new entry for today
        labels.push(today);
        values.push(0); // Assuming initial value for new day is 0
    }

    next();
});


const Admins = mongoose.model("Admins", AdminSchema);

export default Admins;
