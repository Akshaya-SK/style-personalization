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

### Objective of V0

- Validate system flow end-to-end
- Establish baseline logic for personalization
- Create a foundation for future ML integration

### Limitations

- Hardcoded rules (no learning capability)
- Static questionnaire
- Limited personalization depth
- No explainability layer

### Architecture (V0)

- **Frontend**: Collects questionnaire responses
- **Backend**: Processes inputs and applies rules
- **Logic Layer**: Deterministic rule engine
- **Output Layer**: Displays classification results

### What’s Next (V1 Preview)

V1 will transition from rule-based logic to a weighted personalization engine, introducing:
- Weighted scoring system
- Confidence scores
- Persistent user data
- More nuanced personalization

### Tech Stack

- **Frontend**:	Next.js + Tailwind
- **Backend**:	FastAPI
- **Auth**:	Firebase Auth / Auth0
- **Database**:	PostgreSQL
- **Cache**:	Redis
- **Hosting**:	Vercel + Render/AWS

### Conclusion

V0 successfully validates a complete personalization pipeline using rule-based logic. While simplistic, it establishes a strong structural foundation for scaling into a more intelligent, data-driven system in future versions.
