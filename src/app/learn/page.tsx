import "./learn.css"

const FAQ = [
    {
        question:"What are the advantages of Hwato Needles?",
        answer:[
            {segment:"Handle",
            content:"Hwato needles feature a solid, well-balanced handle with appropriate weight, enhancing tactile feedback and stability for the practitioner."
            },
            {segment:"Needle Tip",
            content:"Each tip undergoes specialized processing to minimize the risk of breakage or adverse reactions. Hwato offers both awn-shaped and ultra-awn-shaped tips to meet various clinical requirements."
        },
            {segment:"Needle Body",
            content:"Manufactured using high-grade austenitic stainless steel, the needle body is precisely alloyed for optimal hardness and flexibility. The surface is polished to a smooth, burr-free finish to ensure excellent control and greater patient comfort."
            },
            {segment:"Specifications",
            content:"Diameters range from <strong>0.12 mm</strong> to <strong>0.80 mm</strong>, and lengths <strong>from 5 mm to 150 mm</strong>, with a comprehensive range to support different therapeutic requirements."

            }
        ]
    },
    {
        question:"What kind of processing is typically applied to acupuncture needles on the market?",
        answer:[
            {segment:"Handle",
                content:"Copper handles are passivated to prevent oxidation and discolouration"
            },
            {segment:"Needle Body",
            content:"Stainless steel needle bodies are coated with cured silicone oil to improve insertion smoothness while maintaining a burr-free surface."
            },
            {segment:"Needle Tip",
                content:"Blunt pine-shaped tips often cause more pain on insertion and are rarely used by quality brands. Awn-shaped (lancet-style) tips offer moderate resistance and low discomfort, while ultra-awn-shaped tips are extremely fine and require minimal insertion pressure — but may cause stinging sensations if poorly manufactured."
            }        ]
    }
]


function LearnPage(){
    return (
        <div>
            <h1>Learn</h1>
            <p>Welcome to the Learn page!</p>
            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                {FAQ.map((item, index) => (
                    <div key={index} className="faq-item">
                        <h3>{item.question}</h3>
                        <ul>
                            {item.answer.map((ans, ansIndex) => (
                                <li key={ansIndex}>
                                    <strong>{ans.segment}:</strong> <span dangerouslySetInnerHTML={{ __html: ans.content }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LearnPage;