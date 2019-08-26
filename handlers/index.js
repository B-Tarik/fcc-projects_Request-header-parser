module.exports = function getMyInfos(req, res) {
  
  res.json({
    ipaddress: (req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(',')[0],
    language: req.headers["accept-language"],
    software: req.headers['user-agent']
  });
  
}