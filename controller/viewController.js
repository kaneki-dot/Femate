const getBlog = (req, res) => {
    res.render("blog.ejs");
};
const getCart = (req, res) => {
    res.render("cart.ejs");
};
const getLanding = (req, res) => {
  res.render("landing.ejs");
};
const getpamper = (req, res) => {
    res.render("pamperBooth.ejs");
};
const getProducts = (req, res) => {
  // if(req.id){
    res.render("products.ejs");
  // }else{
  //   res.redirect("/signin")
  // }
};
const getSignin = (req, res) => {
  // if(req.id){
    res.redirect("/")
  // }else{
  //   res.render("signIn.ejs");
  // }
};
const getTracker = (req, res) => {
  // if(req.id){
    res.render("tracker.ejs");
  // }else{
  //   res.redirect("/signin")
  // }
};
const getProfile = (req, res) => {
  // if(req.id){
    res.render("userProfile.ejs");
  // }else{
  //   res.redirect("/signin")
  // }
};
const getForum = (req, res) => {
  // if(req.id){
    res.render("forum.ejs");
  // }else{
  //   res.redirect("/signin")
  // }
};

const getConnect = (req,res)=>{
  // if(req.id){
    res.render("call.ejs");
  // }else{
  //   res.redirect("/signin")
  // }
}
const getVideoCall = (req, res) => {
  // if(req.id){
    res.render("videoCall.ejs");
  // }else{
  //   res.redirect("/signin")
  // }
};

module.exports = {
    getBlog,
    getCart,
    getLanding,
    getProducts,
    getpamper,
    getSignin,
    getTracker,
    getProfile,
    getForum,
    getConnect,
    getVideoCall
}
