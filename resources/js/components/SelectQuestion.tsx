import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
 {
  question: "Que dois-je savoir avant de rejoindre la plateforme ?",
  answer:
   "Vous devez connaître les règles de la communauté, les conditions d'utilisation, et le fonctionnement général de la plateforme pour une meilleure expérience."
 },
 {
  question: "Comment créer un compte ?",
  answer:
   "Cliquez sur le bouton d'inscription, remplissez les informations demandées, puis vérifiez votre adresse e-mail."
 },
 {
  question: "Mes informations personnelles sont-elles en sécurité ?",
  answer:
   "Oui, nous protégeons vos données à l'aide de serveurs sécurisés et de cryptage."
 },
 {
  question: "Puis-je supprimer mon compte à tout moment ?",
  answer:
   "Oui, vous pouvez supprimer votre compte depuis les paramètres de votre profil."
 },
 {
  question: "Y a-t-il des frais cachés ?",
  answer:
   "Non, notre tarification est totalement transparente."
 },
 {
  question: "Comment réinitialiser mon mot de passe ?",
  answer:
   "Cliquez sur 'Mot de passe oublié' sur la page de connexion et suivez les instructions."
 },
 {
  question: "Y a-t-il une application mobile ?",
  answer:
   "Oui, nous proposons une application Android et iOS."
 },
 {
  question: "Comment contacter le support ?",
  answer:
   "Vous pouvez contacter notre équipe via la section aide ou par e-mail."
 },
 {
  question: "Puis-je changer mon adresse e-mail ?",
  answer:
   "Oui, accédez aux paramètres de votre profil pour la modifier."
 },
 {
  question: "Existe-t-il un programme de parrainage ?",
  answer:
   "Oui, vous pouvez inviter des amis et gagner des récompenses."
 },
 {
  question: "Quels sont les avantages du compte premium ?",
  answer:
   "Le compte premium donne accès à des fonctionnalités exclusives."
 },
 {
  question: "À quelle fréquence la plateforme est-elle mise à jour ?",
  answer:
   "Nous publions régulièrement des mises à jour pour améliorer les fonctionnalités."
 },
 {
  question: "Puis-je utiliser la plateforme gratuitement ?",
  answer:
   "Oui, une formule gratuite avec les fonctionnalités de base est disponible."
 },
 {
  question: "Proposez-vous un support client multilingue ?",
  answer:
   "Oui, nous offrons une assistance en plusieurs langues, dont le français."
 },
 {
  question: "Que se passe-t-il si j'enfreins les règles ?",
  answer:
   "Votre compte peut être suspendu ou supprimé en cas de non-respect des règles."
 },
 {
  question: "Y a-t-il une communauté ou un forum ?",
  answer:
   "Oui, nous disposons d'un forum actif pour échanger avec d'autres utilisateurs."
 },
 {
  question: "Puis-je partager mon compte avec quelqu'un ?",
  answer:
   "Non, le partage de compte est interdit pour des raisons de sécurité."
 },
 {
  question: "Comment signaler un bug ?",
  answer:
   "Utilisez l'option de retour dans votre tableau de bord ou envoyez un e-mail au support."
 },
 {
  question: "Puis-je personnaliser mon profil ?",
  answer:
   "Oui, vous pouvez ajouter une photo, une biographie, et modifier vos préférences."
 },
 {
  question: "Dois-je vérifier mon identité ?",
  answer:
   "Dans certains cas, la vérification d'identité est nécessaire pour accéder à certaines fonctionnalités."
 }
];

export default function FAQDropdown() {
 const [openIndex, setOpenIndex] = useState(null);

 const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
 };

 return (
     <div className="mx-auto mt-10 w-full max-w-4xl space-y-2">
         {faqs.map((faq, index) => (
             <div key={index}>
                 <div
                     onClick={() => toggleFAQ(index)}
                     className="my-4 flex cursor-pointer items-center justify-between rounded-md bg-[#11142B] px-6 py-6 text-white"
                 >
                     <span className="font-semibold">{faq.question}</span>
                     <ChevronDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} />
                 </div>
                 {openIndex === index && (
                     <div className="rounded-b-md border border-t-0 border-white bg-[#11142B] px-6 text-black">
                         <p className="-mt-3 text-white">{faq.answer}</p>
                     </div>
                 )}
             </div>
         ))}
     </div>
 );
}
