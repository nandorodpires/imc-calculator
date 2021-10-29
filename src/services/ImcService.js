class ImcService {

    getImc(weight, height) {
        return weight / (height * height)
    }

    getSituation(imc) {

        let code = 0
        let situation = 'Undefined'

        if (imc < 16) {
            code = 1
            situation = 'Subpeso severo'
        } else if (imc >= 16 && imc < 19.9) {
            code = 2
            situation = 'Subpeso'
        } else if (imc >= 20 && imc < 24.9) {
            code = 3
            situation = 'Normal'
        } else if (imc >= 25 && imc < 29.9) {
            code = 4
            situation = 'Sobrepeso'
        }  else if (imc >= 30 && imc < 39.9) {
            code = 5
            situation = 'Obeso'
        } else {
            code = 6
            situation = 'Obeso Mórbido'
        }

        return { code, situation }
    }

}

module.exports = new ImcService