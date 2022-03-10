const Schema = mongoose.Schema;

const medicationSchema = new Schema({
    name: String,
    dose: Number,
    perDiem: {
        type: Number,
        min: 1,
        max: 8,
    },
    timestamps: true,
});

module.exports = mongoose.model('Medication', medicationSchema)