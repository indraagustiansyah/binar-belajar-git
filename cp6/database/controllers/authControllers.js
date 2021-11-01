const viewRegistrasi = async(req, res, next ) => {
    return res.render ('registrasi')
}

const createrRegistrasi = async ( req, res , next) =>{
    const { fullname , email, password, address } = req.body
}

module.exports = {
    viewRegistrasi,
    createrRegistrasi
}