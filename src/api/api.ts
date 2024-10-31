import axios from "axios";
import { IFormInputs } from "../components/form/Form";

const baseUrl = "https://reactexambackend.onrender.com/missions/327204004";
export const createMission = async (formInputs: IFormInputs) => {
  try {
    const response = await axios.post(baseUrl, formInputs);

    if (response.status === 200) {
      console.log("Form submitted successfully!");
    } else {
      console.error("Form submission failed.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
