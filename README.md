# Style Personalization Engine

This project aims to build a scalable AI-driven personalization engine that analyzes user-provided inputs to generate structured, explainable style recommendations including body type classification, face shape analysis, and color palette suggestions.

## Overview

This project builds a scalable, AI-driven personalization system that analyzes user inputs to generate structured and explainable fashion recommendations.
The system focuses on identifying:

- Face Shape
- Body Type
- Color Palette
- Personal Aesthetic

## V0 – Prototype (Rule-Based Engine)

### Description

V0 is a fully functional prototype that demonstrates an end-to-end rule-based personalization pipeline.
Users answer a structured questionnaire, and the backend processes these responses using deterministic logic to generate basic style classifications.

### What It Does

- Collects user input via questionnaire
- Processes responses using rule-based logic
- Classifies:
  - Face Shape
  - Body Type
  - Color Profile
  - Aesthetic Style
- Displays results on the frontend

### Core Pipeline

``` User Input → Backend Processing → Rule Engine → Output Generation ```
