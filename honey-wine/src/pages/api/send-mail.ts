import type { APIContext } from 'astro';
import sendGrid from '@sendgrid/mail';
sendGrid.setApiKey(import.meta.env.SENDGRID_API_KEY);

export async function POST({ request }: APIContext) {
  const data = await request.json();
  const sender = 'no-reply@ads15.id';
  const recipient = import.meta.env.MAIL_RECIPIENT;
  const subject = 'New Order Request';
  const html = `New order request<br/><br/>
        from : ${data.nama}<br/>
        phone number : <a href="https://wa.me/${data.phone?.replace(
          '08',
          '628'
        )}" target="_blank">${data.phone}</a><br/>
        email : <a href="mailto:${data.email}" target="_blank">${data.email}</a><br/>
        ${data.pesan?.replace(/\n/g, '<br/>')}`;

  const msg = {
    to: recipient,
    from: sender,
    replyTo: { email: data.email, name: data.nama },
    subject: subject,
    html: html,
  };

  try {
    const respEmail = await sendGrid.send(msg);
    return Response.json(respEmail);
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
