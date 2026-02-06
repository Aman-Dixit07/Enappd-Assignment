#Waitlist UI Assignment


Live url - https://waitlistuii.netlify.app/

Built by - Aman Dixit

Email - amandixitbsp@gmail.com

Phone - 9981788841

Github - https://github.com/Aman-Dixit07


#Tech Stack


-Nextjs

-Tailwind Css 

-App Router

-Deployed on Netlify

#How i built it

1. UI

a)Followed every rule as per the instruction using the tailwind css and made it to open in both phone screens and desktops.

b)For color code i used hex to tailwind converter to get the exact color as per instruction. i.e. #f3f4f6 (HEX) --> GRAY-100 (Tailwind)

c)And followed every other rules as per instruction and kept it simple.


2. Logic & Validation

a)Email validation: I split the email string by '@' and checked if the domain part matches my blockedDomains array (gmail, yahoo, etc.) and also used 'toLowerCase()' to handle case variations.

b)Reason validation: Simple 'reason.length < 20' to check and show error only on submit, not while typing.

c)Success state: On succesful inputs i used the another page created as /success to send after the user hits the request access token button (We can also show the same ui in the same page.)



#Problem faced

#Problem - Whenever i used to write the reason in the input field the reson error starts to show even though i didnt want to show until i stopped typing.

#Fix - it was happening due i was updating the reason error in the same onchange function so i simply removed it due to which it only shows the rror when i sub,mit the form.


#Installation 

1) Clone

2) Build - npm run buld

3) Start - npm run start
