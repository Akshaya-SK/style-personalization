from collections import defaultdict

# FACE SHAPE (Scoring)
def get_face_shape(face_ratio, jaw_shape, widest_area):
    score = defaultdict(int)


    if face_ratio == "longer" and jaw_shape == "soft":
        score["oval"] += 2

    if face_ratio == "equal" and jaw_shape == "sharp":
        score["square"] += 2

    if widest_area == "cheekbones" and jaw_shape != "sharp":
        score["diamond"] += 3  # strong signal

    if widest_area == "forehead" and jaw_shape == "pointed":
        score["heart"] += 3  # highest priority

    if face_ratio == "shorter" and jaw_shape == "soft":
        score["round"] += 2

    if face_ratio == "longer" and jaw_shape == "sharp":
        score["rectangle"] += 2

    if not score:
        return "oval"

    return max(score, key=score.get)

# -----------------------------

# BODY TYPE (Scoring)

# -----------------------------

def get_body_type(shoulder_hip_ratio, waist_definition, body_build):
    score = defaultdict(int)


    if shoulder_hip_ratio == "equal" and waist_definition == "defined":
        score["hourglass"] += 3

    if shoulder_hip_ratio == "shoulders_wider":
        score["inverted_triangle"] += 2

    if shoulder_hip_ratio == "hips_wider":
        score["pear"] += 2

    if shoulder_hip_ratio == "equal" and waist_definition == "none":
        score["rectangle"] += 2

    if body_build == "full" and waist_definition != "defined":
        score["apple"] += 2

    if not score:
        return "rectangle"

    return max(score, key=score.get)

# UNDERTONE
def get_undertone(veins, jewelry):
    if veins == "green" or jewelry == "gold":
        return "warm"
    if veins == "blue_purple" or jewelry == "silver":
        return "cool"
    return "neutral"

# COLOR PROFILE (Scoring)
def get_color_profile(undertone, contrast):
    score = defaultdict(int)


    if undertone == "warm" and contrast == "low":
        score["warm_soft"] += 2

    if undertone == "warm" and contrast == "high":
        score["warm_bright"] += 2

    if undertone == "cool" and contrast == "high":
        score["cool_winter"] += 2

    if undertone == "cool" and contrast == "low":
        score["cool_summer"] += 2

    if undertone == "neutral":
        score["neutral"] += 2

    if not score:
        return "neutral"

    return max(score, key=score.get)

# AESTHETIC (Scoring)
def get_aesthetic(silhouette, vibe, color_pref):
    score = defaultdict(int)


    if silhouette == "flowy":
        score["boho"] += 1
    if vibe == "effortless":
        score["boho"] += 1

    if silhouette == "structured":
        score["classic"] += 1
    if vibe == "elegant":
        score["classic"] += 1

    if silhouette == "minimal":
        score["minimalist"] += 1
    if color_pref == "neutral":
        score["minimalist"] += 1

    if silhouette == "bold":
        score["streetwear"] += 1
    if vibe == "edgy":
        score["streetwear"] += 1

    if silhouette == "feminine":
        score["soft_romantic"] += 1
    if vibe == "soft":
        score["soft_romantic"] += 1

    if vibe == "sporty":
        score["athleisure"] += 2  # strong signal

    if not score:
        return "minimalist"

    return max(score, key=score.get)

# FINAL PIPELINE
def generate_profile(inputs):
    face = get_face_shape(
    inputs["face_ratio"],
    inputs["jaw_shape"],
    inputs["widest_area"]
    )


    body = get_body_type(
        inputs["shoulder_hip_ratio"],
        inputs["waist_definition"],
        inputs["body_build"]
    )

    undertone = get_undertone(
        inputs["undertone_veins"],
        inputs["jewelry_preference"]
    )

    color = get_color_profile(
        undertone,
        inputs["contrast_level"]
    )

    aesthetic = get_aesthetic(
        inputs["silhouette_preference"],
        inputs["vibe"],
        inputs["color_pattern_comfort"]
    )

    return {
        "face_shape": face,
        "body_type": body,
        "color_profile": color,
        "aesthetic": aesthetic
    }
