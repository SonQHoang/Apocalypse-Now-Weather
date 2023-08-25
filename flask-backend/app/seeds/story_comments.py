from collections import defaultdict

story_comments = [
    {
        "id": 1,
        "story_id": 1,
        "user_id": 1,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, that's insane. I never knew this was a thing..."
    },
    {
        "id": 2,
        "story_id": 1,
        "user_id": 1,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Thanks for sharing your story so we can all be more informed!"
    },
    {
        "id": 3,
        "story_id": 2,
        "user_id": 2,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Just another normal day of bad weather..."
    },
    {
        "id": 4,
        "story_id": 3,
        "user_id": 3,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    },
    {
        "id": 5,
        "story_id": 4,
        "user_id": 3,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    }, 
    {
        "id": 6,
        "story_id": 5,
        "user_id": 3,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    },
    {
        "id": 7,
        "story_id": 6,
        "user_id": 3,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    },
    {
        "id": 8,
        "story_id": 7,
        "user_id": 4,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Surviving that took guts and quick thinking. I don't know if I could've handled myself like you in that situation."
    },
    {
        "id": 9,
        "story_id": 8,
        "user_id": 5,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Dang"
    },
    {
        "id": 10,
        "story_id": 9,
        "user_id": 6,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Surviving that took guts and quick thinking. I don't know if I could've handled myself like you in that situation."
    },
    {
        "id": 11,
        "story_id": 10,
        "user_id": 7,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    },
    {
        "id": 12,
        "story_id": 11,
        "user_id": 8,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Thanks for sharing your story so we can all be more informed!"
    },
    {
        "id": 13,
        "story_id": 12,
        "user_id": 8,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Thanks for sharing your story so we can all be more informed!"
    },
    {
        "id": 14,
        "story_id": 13,
        "user_id": 8,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    },
    {
        "id": 15,
        "story_id": 14,
        "user_id": 9,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    },
    {
        "id": 16,
        "story_id": 15,
        "user_id": 10,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    },
    {
        "id": 17,
        "story_id": 16,
        "user_id": 11,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    },
    {
        "id": 18,
        "story_id": 17,
        "user_id": 12,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    },
    {
        "id": 19,
        "story_id": 18,
        "user_id": 13,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    },
    {
        "id": 20,
        "story_id": 19,
        "user_id": 14,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    },
    {
        "id": 21,
        "story_id": 20,
        "user_id": 14,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Thanks for sharing your story so we can all be more informed!"
    },
    {
        "id": 22,
        "story_id": 21,
        "user_id": 15,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Thanks for sharing your story so we can all be more informed!"
    },
    {
        "id": 23,
        "story_id": 22,
        "user_id": 16,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Thanks for sharing your story so we can all be more informed!"
    },
    {
        "id": 24,
        "story_id": 23,
        "user_id": 16,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Thanks for sharing your story so we can all be more informed!"
    },
    {
        "id": 25,
        "story_id": 24,
        "user_id": 16,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    },
    {
        "id": 26,
        "story_id": 25,
        "user_id": 16,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    },
    {
        "id": 27,
        "story_id": 26,
        "user_id": 17,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    },
    {
        "id": 28,
        "story_id": 27,
        "user_id": 18,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    },
    {
        "id": 29,
        "story_id": 28,
        "user_id": 19,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    },
    {
        "id": 30,
        "story_id": 29,
        "user_id": 20,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    },
    {
        "id": 31,
        "story_id": 30,
        "user_id": 21,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    }, {
        "id": 32,
        "story_id": 31,
        "user_id": 22,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    },
    {
        "id": 33,
        "story_id": 32,
        "user_id": 23,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    }, 
    {
        "id": 34,
        "story_id": 33,
        "user_id": 24,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    },
    {
        "id": 35,
        "story_id": 34,
        "user_id": 25,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    },
    {
        "id": 36,
        "story_id": 35,
        "user_id": 26,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, Mother Nature isn't happy with us..."
    },
    {
        "id": 37,
        "story_id": 36,
        "user_id": 27,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, Mother Nature isn't happy with us..."
    },
    {
        "id": 38,
        "story_id": 37,
        "user_id": 27,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, Mother Nature isn't happy with us..."
    },
    {
        "id": 39,
        "story_id": 38,
        "user_id": 28,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, Mother Nature isn't happy with us..."
    },
    {
        "id": 40,
        "story_id": 39,
        "user_id": 29,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, Mother Nature isn't happy with us..."
    },
    {
        "id": 41,
        "story_id": 40,
        "user_id": 30,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, Mother Nature isn't happy with us..."
    },
    {
        "id": 42,
        "story_id": 41,
        "user_id": 31,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Just another normal day of bad weather..."
    },
    {
        "id": 43,
        "story_id": 42,
        "user_id": 32,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Just another normal day of bad weather..."
    },
    {
        "id": 44,
        "story_id": 43,
        "user_id": 33,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Just another normal day of bad weather..."
    },
    {
        "id": 45,
        "story_id": 44,
        "user_id": 34,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Just another normal day of bad weather..."
    }, 
    {
        "id": 46,
        "story_id": 45,
        "user_id": 35,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Just another normal day of bad weather..."
    },
    {
        "id": 47,
        "story_id": 46,
        "user_id": 36,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Just another normal day of bad weather..."
    },
    {
        "id": 48,
        "story_id": 47,
        "user_id": 36,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, Mother Nature isn't happy with us..."
    },
    {
        "id": 49,
        "story_id": 48,
        "user_id": 37,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, Mother Nature isn't happy with us..."
    },
    {
        "id": 50,
        "story_id": 49,
        "user_id": 38,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, Mother Nature isn't happy with us..."
    },
    {
        "id": 51,
        "story_id": 50,
        "user_id": 38,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    },
    {
        "id": 52,
        "story_id": 51,
        "user_id": 38,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    },
    {
        "id": 53,
        "story_id": 52,
        "user_id": 39,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, that's insane. I never knew this was a thing..."
    },
    {
        "id": 54,
        "story_id": 53,
        "user_id": 40,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, that's insane. I never knew this was a thing..."
    },
    {
        "id": 55,
        "story_id": 54,
        "user_id": 41,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, that's insane. I never knew this was a thing..."
    },
    {
        "id": 56,
        "story_id": 55,
        "user_id": 42,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, that's insane. I never knew this was a thing..."
    },
    {
        "id": 57,
        "story_id": 56,
        "user_id": 43,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, that's insane. I never knew this was a thing..."
    },
    {
        "id": 58,
        "story_id": 57,
        "user_id": 44,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, that's insane. I never knew this was a thing..."
    }, 
    {
        "id": 59,
        "story_id": 58,
        "user_id": 45,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, that's insane. I never knew this was a thing..."
    },
    {
        "id": 60,
        "story_id": 59,
        "user_id": 45,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    },
    {
        "id": 61,
        "story_id": 60,
        "user_id": 46,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    },
    {
        "id": 62,
        "story_id": 61,
        "user_id": 47,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    },
    {
        "id": 63,
        "story_id": 62,
        "user_id": 48,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    },
    {
        "id": 64,
        "story_id": 63,
        "user_id": 49,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    },
    {
        "id": 65,
        "story_id": 64,
        "user_id": 50,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    },
    {
        "id": 66,
        "story_id": 33,
        "user_id": 24,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "This is a story that everyone should read."
    },
    {
        "id": 67,
        "story_id": 33,
        "user_id": 50,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, you learn something new everyday."
    },
    {
        "id": 68,
        "story_id": 4,
        "user_id": 23,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "And this is why I don't wanna go outside everyone."
    },
    {
        "id": 69,
        "story_id": 7,
        "user_id": 25,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Does anyone remember when the weather started being so terrible? Anyone remember the good 'ol days when we would all just complain about it being too hot or there being too much rain?"
    },
    {
        "id": 70,
        "story_id": 23,
        "user_id": 3,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I love how descriptive you were in your story. Keep on writing!"
    },
    {
        "id": 71,
        "story_id": 22,
        "user_id": 40,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Gosh nature is something else these days.."
    },
    {
        "id": 72,
        "story_id": 41,
        "user_id": 50,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Sending prayers and love your way. Stay safe"
    },
    {
        "id": 73,
        "story_id": 25,
        "user_id": 50,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Yeah our world is going downhill fast..."
    },
    {
        "id": 74,
        "story_id": 29,
        "user_id": 50,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I'm soo thankful you shared this story. More people need to know about this."
    },
    {
        "id": 75,
        "story_id": 30,
        "user_id": 20,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "What the person above me said! Yeah so many peopl would be better off if they knew the story you were sharing!"
    },
    {
        "id": 76,
        "story_id": 32,
        "user_id": 49,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting mroe and more scared"
    },
    {
        "id": 77,
        "story_id": 32,
        "user_id": 50,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Bro, do you really think feeling safe but being ignorant is going to help? These people are going to be in a lot of trouble if they were to suddenly encounter these situations. At least letting them know gives them a heads up"
    },
    {
        "id": 78,
        "story_id": 32,
        "user_id": 5,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Yeah I agree, better to know more than less."
    },
    {
        "id": 79,
        "story_id": 32,
        "user_id": 27,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone"
    },
    {
        "id": 80,
        "story_id": 65,
        "user_id": 29,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Good read"
    },
    {
        "id": 81,
        "story_id": 12,
        "user_id": 5,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "It was an okay story.."
    },
    {
        "id": 82,
        "story_id": 14,
        "user_id": 4,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow, who would have thought..."
    },
    {
        "id": 83,
        "story_id": 16,
        "user_id": 40,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "First time on this site and wow these stories are insane. Keep writing ya'll!"
    },
    {
        "id": 84,
        "story_id": 14,
        "user_id": 50,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Sending prayers and love your way. Stay safe"
    },
    {
        "id": 85,
        "story_id": 18,
        "user_id": 2,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "The world is a little less dark because of all of you..."
    },
    {
        "id": 86,
        "story_id": 16,
        "user_id": 50,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I'm soo thankful you shared this story. More people need to know about this."
    },
    {
        "id": 87,
        "story_id": 54,
        "user_id": 20,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "What the person above me said! Yeah so many people would be better off if they knew the story you were sharing!"
    },
    {
        "id": 88,
        "story_id": 62,
        "user_id": 49,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting mroe and more scared"
    },
    {
        "id": 89,
        "story_id": 62,
        "user_id": 30,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "This is going to be crazy..."
    },
    {
        "id": 90,
        "story_id": 4,
        "user_id": 5,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow who wouldn've thought that would've been there."
    },
    {
        "id": 81,
        "story_id": 13,
        "user_id": 7,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone"
    },
    {
        "id": 92,
        "story_id": 8,
        "user_id": 8,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Good read"
    },
    {
        "id": 93,
        "story_id": 8,
        "user_id": 25,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I'm soo thankful you shared this story. More people need to know about this."
    },
    {
        "id": 94,
        "story_id": 8,
        "user_id": 20,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "What the person above me said! Yeah so many people would be better off if they knew the story you were sharing!"
    },
    {
        "id": 95,
        "story_id": 62,
        "user_id": 9,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting mroe and more scared"
    },
    {
        "id": 96,
        "story_id": 10,
        "user_id": 15,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Sheesh good luck to whoever decides to live there..."
    },
    {
        "id": 97,
        "story_id": 34,
        "user_id": 5,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Yeah I agree, better to know more than less."
    },
    {
        "id": 98,
        "story_id": 34,
        "user_id": 27,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone"
    },
    {
        "id": 99,
        "story_id": 37,
        "user_id": 29,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Good read"
    },
    {
        "id": 99,
        "story_id": 37,
        "user_id": 29,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Good read"
    },
    {
        "id": 100,
        "story_id": 39,
        "user_id": 29,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Good read"
    },
    {
        "id": 101,
        "story_id": 41,
        "user_id": 5,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Yeah I agree, better to know more than less."
    },
    {
        "id": 102,
        "story_id": 36,
        "user_id": 27,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone"
    },
    {
        "id": 103,
        "story_id": 43,
        "user_id": 29,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Good read"
    },
    {
        "id": 104,
        "story_id": 43,
        "user_id": 50,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I'm soo thankful you shared this story. More people need to know about this."
    },
    {
        "id": 105,
        "story_id": 41,
        "user_id": 20,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "What the person above me said! Yeah so many people would be better off if they knew the story you were sharing!"
    },
    {
        "id": 106,
        "story_id": 44,
        "user_id": 49,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting mroe and more scared"
    },
    {
        "id": 107,
        "story_id": 46,
        "user_id": 30,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "This is going to be crazy..."
    },
    {
        "id": 108,
        "story_id": 42,
        "user_id": 5,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Yeah I agree, better to know more than less."
    },
    {
        "id": 109,
        "story_id": 45,
        "user_id": 27,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone"
    },
    {
        "id": 110,
        "story_id": 41,
        "user_id": 29,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Good read"
    },
    {
        "id": 111,
        "story_id": 44,
        "user_id": 29,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Good read"
    },
     {
        "id": 112,
        "story_id": 39,
        "user_id": 29,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Good read"
    },
    {
        "id": 113,
        "story_id": 41,
        "user_id": 5,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Yeah I agree, better to know more than less."
    },
    {
        "id": 114,
        "story_id": 36,
        "user_id": 27,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone"
    },
    {
        "id": 115,
        "story_id": 43,
        "user_id": 29,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Good read"
    },
    {
        "id": 116,
        "story_id": 43,
        "user_id": 50,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I'm soo thankful you shared this story. More people need to know about this."
    },
    {
        "id": 117,
        "story_id": 41,
        "user_id": 20,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "What the person above me said! Yeah so many people would be better off if they knew the story you were sharing!"
    },
    {
        "id": 118,
        "story_id": 44,
        "user_id": 49,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting mroe and more scared"
    },
    {
        "id": 119,
        "story_id": 58,
        "user_id": 24,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Wow that was eye opening..."
    },
    {
        "id": 120,
        "story_id": 42,
        "user_id": 55,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Sometimes I wish I didn't go on this site. I get more scared each time."
    },
    {
        "id": 121,
        "story_id": 51,
        "user_id": 37,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Well I've got my daily dose of the news for today"
    },
    {
        "id": 122,
        "story_id": 50,
        "user_id": 17,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Whoa, looking forward to whate you're going to write next"
    },
    {
        "id": 123,
        "story_id": 44,
        "user_id": 50,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Interesting story"
    },
    {
        "id": 124,
        "story_id": 9,
        "user_id": 50,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Who would've thought that my home would become like this..."
    },
    {
        "id": 125,
        "story_id": 9,
        "user_id": 11,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "Yeah, my family is out there as well..."
    },
    {
        "id": 126,
        "story_id": 65,
        "user_id": 1,
        "date_created": "2023-08-23T09:34:00-07:00",
        "body": "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    },
]

comment_counts = defaultdict(int)

# Count the comments for each story_id
for comment in story_comments:
    story_id = comment['story_id']
    comment_counts[story_id] += 1

# Print the comment counts for each story_id
for story_id, count in comment_counts.items():
    print(f"Story ID {story_id} has {count} comments.")