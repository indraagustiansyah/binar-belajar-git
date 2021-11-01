const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/users.model");
const Scoring = require("../models/scoring.model");

const { APP_SECRET } = process.env;

const createToken = (id) => {
  return jwt.sign({ id }, APP_SECRET, { expiresIn: "7 days" });
};

const viewRegister = (req, res) => {
  return res.render("register");
};

const viewMember = async (req, res) => {
  const members = await  User.findAll()
  
  return res.render("list-member", {
    members
  });
  
};

const viewLogin = (req, res) => {
  return res.render("login");
};

const viewScoring = async (req, res) => {
  var _id = req.params.id
  console.log(_id)
  const members = await User.findOne({
    where :{
       id :_id,
    }
  });
  


  const scorings = await  Scoring.findAll({
    where :{
      user_id : _id,
    }
  })
  
  return res.render("list-score", {
    members,
    scorings
  });
};

const createPoint = async (req, res) => {
  const { game_name, game_date, game_point, user_id } = req.body

  await Scoring.create ({
    user_id,
    game_name,
    game_date,
    game_point
  })

  const members = await User.findOne({
    where :{
       id :user_id,
    }
  });
  const scorings = await  Scoring.findAll({
    where :{
      user_id : user_id,
    }
  })
  return res.render("list-score", {
    members,
    scorings
  });

}


const removePoint = async (req, res) => {
  const user = req.params.user
  const id = req.params.id

  await Scoring.destroy ({
    where : {
      id : id,
    }
  })

  const members = await User.findOne({
    where :{
       id : user,
    }
  });
  const scorings = await  Scoring.findAll({
    where :{
      user_id : user,
    }
  })
  return res.render("list-score", {
    members,
    scorings
  });

}


const editMember = async (req, res) => {
  var id = req.params.id
  console.log(req.params)
  const members = await User.findOne({
    where: {
      id,
    },
  });
  console.log(members)

  res.render('edit-member', {
   members				
  })
}

const updateMember = async (req, res) => {
  var { email, mobilephone, alamat, id } = req.body

  var _id = req.body.id
  console.log(req.body)
  await User.update({
    email,
    mobilephone ,
    alamat},
    { 
      where: { id: _id, }
    },
    
  );
  var members = await User.findAll()
  res.render('list-member',{
    members
  })
}

const removeMember = async (req, res) => {
  var _id = req.params.id
  console.log(req.params)
  await User.destroy(
    { 
      where: { id: _id, }
    },
    
  );

  var members = await User.findAll()
  res.render('list-member',{
    members
  })
}

const scoreMember = async (req, res) => {

  console.log(req.params)

}

const createRegister = async (req, res, next) => {
  try {
    const { email, password, mobilephone, alamat } = req.body;
    console.log(req.body);
    if (!email) {
      throw {
        message: `email must be valid`,
        code: 400,
        error: `bad request`,
      };
    }

    if (!password || password.length < 8) {
      throw {
        message: `password min length 8 character`,
        code: 400,
        error: `bad request`,
      };
    }

    const isExist = await User.findOne({
      where: {
        email,
      },
    });

    if (isExist) {
      throw {
        message: `users already exists`,
        code: 400,
        error: `bad request`,
      };
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await User.create({
      email,
      password: passwordHash,
      mobilephone,
      alamat
    });

    const token = await createToken(user.id);

    return res.status(301).redirect('/list-member');
  } catch (error) {
    next(error);
  }
};
const createLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email) {
      throw {
        message: `email must be valid`,
        code: 400,
        error: `bad request`,
      };
    }

    if (!password || password.length < 8) {
      throw {
        message: `password min length 8 character`,
        code: 400,
        error: `bad request`,
      };
    }

    const isExist = await User.findOne({
      where: {
        email,
      },
    });

    if (!isExist) {
      throw {
        message: `User Not Found`,
        code: 404,
        error: `bad request`,
      };
    }

    const isMatch = await bcrypt.compare(password, isExist.password);

    if (!isMatch) {
      throw {
        message: `Wrong Password`,
        code: 404,
        error: `bad request`,
      };
    }

    const token = await createToken(isExist.id);

    return res.status(301).redirect('/list-member');
  } catch (error) {
    next(error);
  }
};

module.exports = { viewRegister, viewMember, viewLogin, createRegister, createLogin, editMember,updateMember, removeMember, scoreMember, viewScoring, createPoint, removePoint };
