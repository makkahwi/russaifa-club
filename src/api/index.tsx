import axios from "axios";

const writeApi = axios.create({
  baseURL:
    "https://myresume-6ab68-default-rtdb.europe-west1.firebasedatabase.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

const readApi = axios.create({
  baseURL:
    "https://noor-kayyali-default-rtdb.europe-west1.firebasedatabase.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendContacts = (data: object) =>
  writeApi.post("contact-form.json", data);

export const getCerts = () => readApi.get("certificates.json");
export const getBlogPosts = () => readApi.get("blog.json");
export const getAchievements = () => readApi.get("achievements.json");
export const getPartners = () => readApi.get("partners.json");
export const getTestimonials = () => readApi.get("testimonials.json");
export const getUniquePrograms = () => readApi.get("uniquePrograms.json");
export const getVlog = () => readApi.get("vlog.json");
