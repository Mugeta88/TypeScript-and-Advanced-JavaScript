class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
    }

}


function validateId(id: number) {
    if (Number.isNaN(id)) {
        throw new CustomError("ID is not a number and must be a number.");
    }
}


try {
    validateId(45);
} catch (error) {
    console.error("An error occured:", error.message)
} finally {
    console.log("Operation complete.");
}