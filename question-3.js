// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) 
{
    const length = userPassword.length;
if (length < 6) 
    {
    return "Weak";
}
else if (length >= 6 && length <=10)
    {
    return "Medium";
}
else 
{
    return "Strong";
}
}