class Student {
    constructor(subjects,tuition_fee){
        this._subjects = subjects;
        this._tuition_fee = tuition_fee;
    }

    get subjects(){
        return this._subjects;
    }

    get tuition_fee(){
        return this._tuition_fee;
    }
}

module.exports = Student;