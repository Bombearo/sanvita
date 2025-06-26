"use server";
import { sendMail } from "@/lib/send-mail";

const constructEmailReceipt = (name: string, email: string, orderRef: string, inquiryType: string, message: string, isRecipient:boolean=true) => {

        return `<table class="heading_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                    <td class="pad">
                                        <h2 style="margin: 0; color: #02735e; direction: ltr; font-family: 'Bitter', Georgia, Times, 'Times New Roman', serif; font-size: 30px; font-weight: 400; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 36px;"><span class="tinyMce-placeholder" style="word-break: break-word;">${isRecipient ? "Your" : "Their"} Enquiry Details</span></h2>
                                    </td>
                                </tr>
                            </table>
                            <table class="table_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                    <td class="pad">
                                        <table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; width: 100%; table-layout: fixed; direction: ltr; background-color: transparent; font-family: 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif; font-weight: 400; color: #101112; text-align: left; letter-spacing: 0px;" width="100%">
                                            <thead style="vertical-align: top; background-color: transparent; color: #101112; font-size: 16px; line-height: 1.2; mso-line-height-alt: 19px;">
                                                <tr>
                                                    <th width="50%" style="padding: 10px; word-break: break-word; font-weight: 700; border-top: 0px solid #dddddd; border-right: 0px solid #dddddd; border-bottom: 0px solid #dddddd; border-left: 0px solid #dddddd; text-align: left;">Inquiry Type: ${inquiryType}</th>
                                                    ${isRecipient? 
                                                    `<th width="50%" style="padding: 10px; word-break: break-word; font-weight: 700; border-top: 0px solid #dddddd; border-right: 0px solid #dddddd; border-bottom: 0px solid #dddddd; border-left: 0px solid #dddddd; text-align: left;">${email !== null ? "Your Email: "+ email: "&#8203;"}</th>`:
												`<th width="50%" style="padding: 10px; word-break: break-word; font-weight: 700; border-top: 0px solid #dddddd; border-right: 0px solid #dddddd; border-bottom: 0px solid #dddddd; border-left: 0px solid #dddddd; text-align: left;">${email !== null ? "Customer Email: "+ email: "&#8203;"}</th>`}
                                                </tr>
                                            </thead>
                                            <tbody style="vertical-align: top; font-size: 16px; line-height: 1.2; mso-line-height-alt: 19px;">
                                                <tr>
                                                    <td width="50%" style="vertical-align: top; padding: 10px; word-break: break-word; border-top: 0px solid #dddddd; border-right: 0px solid #dddddd; border-bottom: 0px solid #dddddd; border-left: 0px solid #dddddd;">Name: ${name}</td>
                                                    <td width="50%" style="vertical-align: top; padding: 10px; word-break: break-word; border-top: 0px solid #dddddd; border-right: 0px solid #dddddd; border-bottom: 0px solid #dddddd; border-left: 0px solid #dddddd;">Order Ref: ${orderRef ? orderRef : "N/A"}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <table class="paragraph_block block-7" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                    <td class="pad">
                                        <div style="color:#02735e;direction:ltr;font-family:'Bitter', Georgia, Times, 'Times New Roman', serif;font-size:23px;font-weight:700;letter-spacing:0px;line-height:1.2;text-align:left;mso-line-height-alt:28px;">
                                            <p style="margin: 0;">${isRecipient ? "Your" : "Their"} Message:</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <table class="paragraph_block block-8" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                    <td class="pad">
                                        <div style="color:#101112;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:left;mso-line-height-alt:19px;">
                                            <p style="margin: 0;">${message}</p>
                                        </div>
                                    </td>
                                </tr>
                    </table>`;
    };

    const generateHtml = (name: string, email: string, orderRef: string, inquiryType: string, message: string, isRecipient:boolean) => {
    const styles = `
    * {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			font-size: 75%;
			line-height: 0;
		}

		@media (max-width:520px) {
			.desktop_hide table.icons-inner {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
    `

        const heading = `<table class="heading_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<h1 style="margin: 0; color: #02735e; direction: ltr; font-family: 'Bitter', Georgia, Times, 'Times New Roman', serif; font-size: 38px; font-weight: 400; letter-spacing: normal; line-height: 1.2; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 46px;"><span class="tinyMce-placeholder" style="word-break: break-word;">Thank you for your Enquiry!</span></h1>
															</td>
														</tr>
													</table>`

        const altHeading = `<table class="heading_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<h1 style="margin: 0; color: #02735e; direction: ltr; font-family: 'Bitter', Georgia, Times, 'Times New Roman', serif; font-size: 38px; font-weight: 400; letter-spacing: normal; line-height: 1.2; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 46px;"><span class="tinyMce-placeholder" style="word-break: break-word;">Received a new Enquiry</span></h1>
															</td>
														</tr>
													</table>`
        
        const emailContent = `<table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#444a5b;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:left;mso-line-height-alt:19px;">
																	<p style="margin: 0; margin-bottom: 16px;">Dear ${name},<br><br>Thank you for reaching out to us via our contact form. We’ve received your message and a member of our team will get back to you as soon as possible—typically within 1-2 business days.<br><br>If your enquiry is urgent, please feel free to contact us directly at <a href="mailto:info@sanvitahealth.co.uk" target="_blank" title="info@sanvitahealth.co.uk" style="text-decoration: underline; color: #7747ff;" rel="noopener">info@sanvitahealth.co.uk.</a><br><br>We appreciate your interest and look forward to assisting you.</p>
																	<p style="margin: 0; margin-bottom: 16px;">Best Regards,</p>
																	<p style="margin: 0;">Sanvita Health</p>
																</div>
															</td>
														</tr>
													</table>`
        
        const altEmailContent = `<table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#444a5b;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:left;mso-line-height-alt:19px;">
																	<p style="margin: 0; margin-bottom: 16px;">You have received an enquiry from ${name}. Their contact email provided is <a href="mailto:${email}">${email}</a>.</p>
                                                                    <p style="margin: 0; margin-bottom: 16px;">Please review the details below:</p>
																</div>
															</td>
														</tr>
													</table>`

        const websiteButton = `<table class="button_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center"><a href="www.sanvitahealth.co.uk" target="_blank" style="color:#02735e;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="www.sanvitahealth.co.uk"  style="height:42px;width:159px;v-text-anchor:middle;" arcsize="10%" fillcolor="#e4f0d0">
<v:stroke dashstyle="Solid" weight="0px" color="#e4f0d0"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#02735e;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #e4f0d0; border-bottom: 0px solid transparent; border-left: 0px solid transparent; border-radius: 4px; border-right: 0px solid transparent; border-top: 0px solid transparent; color: #02735e; display: inline-block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: 400; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 20px; padding-right: 20px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Visit our Website</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>`

        return `
        <style>${styles}</style>
        <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px; margin: 0 auto;" width="500">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													${isRecipient? heading: altHeading}
													${isRecipient? emailContent: altEmailContent}
													${isRecipient? websiteButton: ''}
													<table class="divider_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;"><span style="word-break: break-word;">&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													${constructEmailReceipt(name, email, orderRef, inquiryType, message,isRecipient)}
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>



        `;
    };


export async function GET(request: Request) {
  // For example, fetch data from your DB here
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request: Request) {
	console.log('POST request received at /api/sendEmail');
	
    const body = await request.json();
	console.log('Request body:', body);
	console.log(body.hiddenValue, process.env.HIDDEN_VALUE);
    if (body.telephone){
        console.error('Telephone field is not allowed');
        return new Response('Telephone field is not allowed', { status: 400 });
    }
    if (!body.email || !body.subject || !body.text) {
        console.error('Missing required fields: email, subject, or text');
        return new Response('Missing required fields', { status: 400 });
    }

    if (body.hiddenValue !== process.env.HIDDEN_VALUE) {
        console.error('Invalid hidden value');
        return new Response('Invalid hidden value', { status: 400 });
    }

    const htmlContent = generateHtml(
        body.name || 'Customer',
        body.email,
        body.orderRef || '',
        body.inquiryType || 'General',
        body.subject,
        body.text
    );
	const mailOptions = {
		sendTo: body.email || process.env.SITE_MAIL_RECIEVER,
		subject: "Thank you for Contacting Sanvita Health!",
		text: body.text,
		html: htmlContent,
	};

	const altHtmlContent = generateHtml(
		body.name || 'Customer',
		body.email,
		body.orderRef || '',
		body.inquiryType || 'General',
		body.text,
		false
	);

	const altMailOptions = {
		subject: "New Enquiry Received: " + body.subject,
		text: body.text,
		html: altHtmlContent,
	};

	await Promise.all([sendMail(altMailOptions), sendMail(mailOptions)]);

    console.log('Email sent successfully to', body.email);
    return new Response('POST request received');
}