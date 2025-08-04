// Define the type for a single blog post
export interface BlogPost {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
  content: string; // Content for the full blog post page
}

// Centralized blog post data
const allBlogPosts: BlogPost[] = [
  {
    title: "The Art of Fuzzy Wire Crafts: A Beginner's Guide",
    date: "2025-08-01", // Use YYYY-MM-DD for easier sorting
    description:
      "Discover the joy of creating beautiful and everlasting wire bouquets and keychains.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "the-art-of-fuzzy-wire-crafts",
    content: `
      <p>Welcome to the enchanting world of fuzzy wire crafts! These delightful creations, made from colorful chenille stems, offer a unique blend of durability and charm. Unlike traditional flowers that wilt, fuzzy wire bouquets last forever, making them perfect keepsakes and gifts.</p>
      <p>Starting your own fuzzy wire craft project is easier than you think. All you need are chenille stems in various colors, a pair of scissors, and a little imagination. You can twist, bend, and shape the wires into intricate flower petals, adorable animal figures, or even personalized keychains.</p>
      <p>Our artisans at CraftHub pour their heart into every piece, ensuring that each bouquet and keychain is a testament to quality and creativity. We believe that handmade gifts carry a special kind of warmth, and our fuzzy wire crafts are designed to bring smiles that last a lifetime.</p>
      <p>Whether you're looking for a unique gift for a loved one, a charming decoration for your home, or a fun new hobby, fuzzy wire crafts offer endless possibilities. Explore our collection or get in touch for a custom design that truly reflects your vision!</p>
    `,
  },
  {
    title: "Behind the Scenes: How We Make Manila's Best Donuts",
    date: "2025-07-25",
    description:
      "A peek into our daily routine, from early morning baking to your favorite fresh donuts.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "how-we-make-manilas-best-donuts",
    content: `
      <p>Ever wondered what makes our donuts the talk of Manila? It all starts before dawn, at 5 AM, when our dedicated bakers begin their craft. We use only the finest, freshest ingredients, from premium flour to rich, velvety chocolate, ensuring every bite is a taste of perfection.</p>
      <p>Our secret lies in a blend of traditional techniques and a dash of passion. Each donut is hand-kneaded, proofed to fluffy perfection, and fried to a golden crisp. The glazes and toppings are prepared fresh daily, creating a symphony of flavors that keeps our customers coming back for more.</p>
      <p>We take pride in our commitment to freshness. That's why our donuts are often sold out by 3 PM – a testament to their popularity and the limited batches we produce to maintain quality. Pre-ordering is highly recommended to secure your favorites!</p>
      <p>From classic glazed to our decadent Boston Cream, every donut tells a story of dedication and deliciousness. Come visit us or pre-order online to experience Manila's #1 rated donuts for yourself!</p>
    `,
  },
  {
    title: "Taste of Home: Exploring Authentic Pinoy Delicacies",
    date: "2025-07-18",
    description:
      "Journey through the rich flavors and cultural stories behind our traditional Filipino treats.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "exploring-authentic-pinoy-delicacies",
    content: `
      <p>For many Filipinos, the taste of traditional delicacies evokes cherished memories of home, family gatherings, and cultural celebrations. At CraftHub, we are passionate about preserving these authentic flavors, bringing you treats "just like Lola made."</p>
      <p>Our selection features regional specialties, each prepared with time-honored recipes passed down through generations. Take our Bibingka, a traditional rice cake, baked to perfection and topped with cheese, salted egg, and grated coconut – a weekend favorite that sells out fast!</p>
      <p>Or perhaps our Ube Halaya, a creamy purple yam dessert, rich and velvety, limited to small batches each week to ensure premium quality. And of course, our Leche Flan, a silky smooth caramel custard, is our most requested item for special occasions, known for its exquisite texture and balanced sweetness.</p>
      <p>We believe that food is a powerful connection to culture. Whether you're a homesick OFW, planning a special celebration, or simply want to introduce friends to the vibrant flavors of the Philippines, our delicacies offer a genuine taste of home. Pre-order your favorites today and experience the authentic taste of the Philippines!</p>
    `,
  },
  {
    title: "Printing Perfection: Tips for Your Next Business Card Design",
    date: "2025-07-10",
    description:
      "Expert advice on creating impactful business cards that leave a lasting impression.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "tips-for-your-next-business-card-design",
    content: `
      <p>Your business card is often the first impression you make. A well-designed card can speak volumes about your professionalism and attention to detail. At CraftHub Printing Services, we're not just about printing; we're about helping you make that perfect first impression.</p>
      <p>Here are some tips for your next business card design:</p>
      <ul>
        <li><strong>Keep it Simple:</strong> Don't overcrowd your card. Focus on essential information: your name, title, company, contact details, and website.</li>
        <li><strong>Readability is Key:</strong> Choose clear, legible fonts. Ensure the font size is large enough to read easily, even for those with less-than-perfect vision.</li>
        <li><strong>High-Quality Graphics:</strong> If you include a logo, make sure it's a high-resolution image. Blurry logos look unprofessional.</li>
        <li><strong>Consider the Finish:</strong> Matte, glossy, or textured finishes can significantly impact the feel and perceived quality of your card.</li>
        <li><strong>Call to Action:</strong> While not always necessary, a subtle call to action (e.g., "Visit our website") can guide recipients.</li>
      </ul>
      <p>Our state-of-the-art equipment ensures vibrant colors and sharp details, and our free design consultation means you'll get expert advice to optimize your files. Ready to print? Get an instant quote today!</p>
    `,
  },
  {
    title: "Custom Orders: Bringing Your Unique Ideas to Life",
    date: "2025-07-05",
    description:
      "Learn about our custom order process for crafts, delicacies, and printing projects.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "bringing-your-unique-ideas-to-life",
    content: `
      <p>At CraftHub, we thrive on creativity and love turning your unique visions into tangible realities. Whether it's a one-of-a-kind wire craft, a special batch of delicacies for an event, or a custom printing project, our team is here to bring your ideas to life.</p>
      <p>Our custom order process is designed to be seamless and collaborative:</p>
      <ol>
        <li><strong>Consultation:</strong> Share your ideas, requirements, and any inspirations you have. Our experts will provide free consultation and guidance.</li>
        <li><strong>Design & Quote:</strong> We'll work with you to finalize the design and provide a detailed, transparent quote.</li>
        <li><strong>Production:</strong> Once approved, our skilled artisans and technicians get to work, meticulously crafting your order with the highest quality standards.</li>
        <li><strong>Delivery:</strong> Your custom creation is ready for pickup or delivery, perfectly matching your specifications.</li>
      </ol>
      <p>From personalized wire bouquets for corporate gifts to bespoke dessert tables for weddings, and custom-designed marketing materials for your business, we handle it all with precision and passion. Don't hesitate to reach out and discuss your next custom project!</p>
    `,
  },
  {
    title: "Celebrating Milestones with CraftHub: Event Planning Tips",
    date: "2025-06-28",
    description:
      "Ideas and inspiration for incorporating our products into your special events and celebrations.",
    image: "/placeholder.svg?height=200&width=300",
    slug: "celebrating-milestones-with-crafthub",
    content: `
      <p>Life is full of moments worth celebrating, and CraftHub is here to make your special occasions even more memorable. Whether it's a birthday, anniversary, graduation, or corporate event, our diverse range of products can add that unique touch.</p>
      <p>Here are some tips for incorporating CraftHub into your next event:</p>
      <ul>
        <li><strong>Personalized Favors:</strong> Our fuzzy wire keychains or mini sculptures make charming and lasting party favors. Customize them with event dates or names!</li>
        <li><strong>Dessert Table Delights:</strong> A spread of our fresh donuts and authentic Pinoy delicacies like Leche Flan or Ube Halaya will be a guaranteed hit. We offer custom party packages!</li>
        <li><strong>Stunning Invitations & Decor:</strong> Utilize our printing services for elegant invitations, custom banners, and personalized signage that sets the tone for your event.</li>
        <li><strong>Unique Gifts:</strong> A custom wire flower bouquet can be a thoughtful gift for the guest of honor or a centerpiece that never wilts.</li>
      </ul>
      <p>Planning an event can be stressful, but with CraftHub, you can rest assured that your creative and culinary needs are in expert hands. Contact us today to discuss your event and get a free tasting for bulk delicacy orders!</p>
    `,
  },
];

// Function to get all blog posts, sorted by date (most recent first)
export function getAllBlogPosts(): BlogPost[] {
  return [...allBlogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Function to get a single blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
  return allBlogPosts.find((post) => post.slug === slug) || null;
}
