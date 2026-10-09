import { useEffect, useRef, useState } from "react";
import axios from "axios";
import BTN from "../../components/button/BTN";
import useLanguage from "../../context/useLanguage";

const STRAPI_URL = "http://localhost:1337";

const inputClasses =
  "w-full rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none focus:border-zinc-300 focus:ring-2 focus:ring-blue-500/20";

export default function ContactUs() {
  const { t } = useLanguage();
  // بيانات التواصل (إيميل وواتساب) اللي جاية من Strapi
  const [contact, setContact] = useState(null);

  // حالة الإرسال: عادي / بيبعت / نجح / فشل
  const [status, setStatus] = useState("idle");

  // refs بتمسك قيمة كل حقل من غير ما نعمل re-render مع كل حرف
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const formRef = useRef(null);

  // 1) هات بيانات التواصل أول ما الصفحة تفتح
  useEffect(() => {
    axios
      .get(`${STRAPI_URL}/api/contact`)
      .then((res) => setContact(res.data?.data ?? res.data))
      .catch((err) => console.error(t.contact.loadError, err));
  }, [t.contact.loadError]);

  // 2) لما يضغط "Send message"
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      // Strapi لازم البيانات تكون جوه { data: {...} }
      await axios.post(`${STRAPI_URL}/api/messages`, { data: { name, email, message } }, { timeout: 8000 });

      setStatus("success");
      formRef.current.reset(); // فضّي الفورم
    } catch (err) {
      console.error(t.contact.sendError, err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-360 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-semibold text-zinc-950 sm:text-5xl">{t.contact.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-zinc-600 sm:text-lg">{t.contact.description}</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-5">
        {/* الفورم */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-3xl bg-zinc-100 p-6 shadow-lg sm:col-span-3 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input name="name" ref={nameRef} placeholder={t.contact.name} aria-label={t.contact.name} className={inputClasses} />
            <input name="email"type="email"ref={emailRef} placeholder={t.contact.email}aria-label={t.contact.email} className={inputClasses}/>
          </div>
          <textarea
            name="message"
            ref={messageRef}
            placeholder={t.contact.message}
            aria-label={t.contact.message}
            rows={5}
            className={`${inputClasses} resize-none`}
          />

          <div className="mt-2 flex items-center gap-4">
            <BTN type="submit" disabled={status === "sending"}>
              {status === "sending" ? t.contact.sending : t.contact.send}
            </BTN>

            {status === "success" && <span className="text-sm font-medium text-emerald-600">{t.contact.success}</span>}
            {status === "error" && <span className="text-sm font-medium text-red-600">{t.contact.error}</span>}
          </div>
        </form>

        {/* بيانات التواصل المباشر */}
        <div className="flex flex-col gap-4 sm:col-span-2">
          <a
            href={`https://wa.me/${String(contact?.whatsapp ?? "").replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-zinc-100 p-6 shadow-lg transition hover:bg-white"
          >
            <span className="block text-sm font-medium text-zinc-900">{t.contact.whatsappLabel}</span>
            <span className="block text-sm text-zinc-500">{contact?.whatsapp ?? t.contact.whatsapp}</span>
          </a>

          <a
            href={contact?.email ? `mailto:${contact.email}` : undefined}
            className="rounded-3xl bg-zinc-100 p-6 shadow-lg transition hover:bg-white"
          >
            <span className="block text-sm font-medium text-zinc-900">{t.contact.emailLabel}</span>
            <span className="block truncate text-sm text-zinc-500">{contact?.email ?? "—"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
