import crypto from "crypto";

const log = console.log;
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";
  return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
  const random = crypto.randomBytes(length);
  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars.charAt(random[i] % chars.length);
  }
  return password;
};

log(createPassword());
