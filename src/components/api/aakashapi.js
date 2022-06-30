import axios from "axios";

export const aakashapi = axios.create({
  baseURL: "https://aakash.group/mail.php",
});
