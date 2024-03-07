import React, { useState, useEffect } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import axios from "axios";

const CandidateProfileScreen = () => {
  const [candidateProfile, setCandidateProfile] = useState({
    name: "",
    email: "",
    resume: null,
    skills: "",
    experience: "",
    education: "",
  });
  const toast = useToast();

  useEffect(() => {
    fetchCandidateProfile();
  }, []);

  const fetchCandidateProfile = async () => {
    try {
      const response = await axios.get("/api/candidate-profiles/me");
      setCandidateProfile(response.data);
    } catch (error) {
      console.error("Error fetching candidate profile:", error);
      toast({
        title: "Error",
        description: "Failed to fetch candidate profile",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUploadResume = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await axios.post("/api/candidate-profiles/me/resume", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setCandidateProfile((prevState) => ({
        ...prevState,
        resume: response.data.resume,
      }));
      toast({
        title: "Resume Uploaded",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error uploading resume:", error);
      toast({
        title: "Error",
        description: "Failed to upload resume",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return <Box>{}</Box>;
};

export default CandidateProfileScreen;
