import React from 'react'
// import { MessageCircle } from "lucide-react";
import whatsappIcon from "../assets/whatsapp.png";

function WhatsAppButton() {
    const phoneNumber = "447442070305"; // replace with your number
    const message = "Hello, I want to know more about your services";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition z-50"
        >
            {/* <MessageCircle className="text-white w-6 h-6" /> */}
            <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
        </a>
    );
}

export default WhatsAppButton