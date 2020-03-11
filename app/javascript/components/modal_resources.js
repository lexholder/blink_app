const whyBlink = `<p>As phone and computer screens become more ubiquitious, it’s important to educate ourselves on the dangers that using these devices present to our eye health.</p>
<p>Before computer and phone screens became a part of our daily lives, people blinked 12 - 18 times per minute. Because of these devices, people now blink about 5 times per minute.</p>
<p>Not blinking often enough can lead to a dry eye disease called Meibomian Gland Dysfunction, or MGD, and here’s why: everyone has tiny glands in their top and bottom eyelids called meibomian glands. These glands produce an oily substance called meibum that prevents evaporation of the eye’s tear film. The only way that meibum is secreted into your eyes is through blinking.</p>
<p>Due to a combination of not blinking enough and using smart devices at younger ages, children as young as seven are being diagnosed with MGDd. Until recently, this was most often diagnosed in people 50 years or older.</p>
<p>We're not helpless against these symptoms, however. Use this app to build better habits and eye health.</p>`;

const hygiene = `<p>You might wonder why cleaning your eye lids everyday is so important. As trivial as it may seem, cleaning your eye lids on a daily basis is one of the best hygiene habits you can practice!</p>
<p>Other than blinking, cleaning your eye lids is a great way to prevent those red, itchy eyes. For the vast majority of people with dry eyes, the problem starts with the oil glands in our eyelids called the Meibomian Glands. If you don’t clean your eyelids regularly, debris can build up over time and clog these glands. This leads to unstable tear film, which can cause Meibomian Gland Dysfunction, or MGD.</p>
<p>We recommend cleaning your eyelids twice per day. Ask your doctor what to use for the cleaning agent (options usually include warm water, diluted baby shampoo, or over-the-counter or prescription eyelid cleanser), and simply follow these steps for clean eyelids: </p>
<ul>
<p>-Wash your hands, and then moisten a clean washcloth, cotton swab, or gauze pad with the cleaning solution.</p>
<p>-Gently wipe your eyelashes and lids.</p>
<p>-Rinse with warm water.</p>
<p>-Repeat the process for your other eye using a different washcloth, swab or pad.</p>
</ul>
<p>And you’re done! You’re on the path to healthier eyes already!</p>`;

const fillInModalResource = (title) => {
  document.getElementById("resource-title-in-modal").innerHTML = title;
  let content = ""
  if (title === "Why BLINK?"){
    content = whyBlink;
  } else if (title === "Tips For Great Eye Hygiene!"){
    content = hygiene;
  }
  document.getElementById("resource-content-in-modal").innerHTML = content;
};



export { fillInModalResource };
