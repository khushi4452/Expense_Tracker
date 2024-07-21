import User from "../models/User.js"



const postSignup = async (req, res) => {
  const { fullName, email, password, dob } = req.body;

  const user = new User({
    fullName,
    email,
    password,
    dob: new Date(dob)
  });

  try {
    const savedUser = await user.save();

    res.json({
      success: true,
      message: `Signup successful`,
      data: savedUser
    })
  }
  catch (e) {
    res.json({
      success: false,
      message: e.message,
      data: null
    })
  }
}






const postLogin =async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      return res.json({
        success: true,
        message: "Login successfully",
        data: user
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid credentials",
        data: null
      });
    }
  } catch (e) {
    return res.json({
      success: false,
      message: e.message,
      data: null
    });
  }
};


export {postSignup , postLogin}


