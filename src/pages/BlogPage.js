import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Credit Card for Your Lifestyle",
      excerpt: "Discover the key factors to consider when selecting a credit card that matches your spending habits and financial goals.",
      date: "May 15, 2023",
      author: "Priya Sharma",
      image: "https://via.placeholder.com/800x400",
      category: "Credit Cards"
    },
    {
      id: 2,
      title: "5 Ways to Improve Your Credit Score in 2023",
      excerpt: "Learn effective strategies to boost your credit score and unlock better financial opportunities.",
      date: "April 22, 2023",
      author: "Rahul Verma",
      image: "https://via.placeholder.com/800x400",
      category: "Personal Finance"
    },
    {
      id: 3,
      title: "Understanding Credit Card Reward Programs",
      excerpt: "A comprehensive guide to maximizing benefits from different types of credit card reward systems.",
      date: "April 10, 2023",
      author: "Neha Patel",
      image: "https://via.placeholder.com/800x400",
      category: "Credit Cards"
    },
    {
      id: 4,
      title: "Demystifying Annual Percentage Rates (APR)",
      excerpt: "Everything you need to know about APR and how it affects your credit card expenses.",
      date: "March 28, 2023",
      author: "Vikram Singh",
      image: "https://via.placeholder.com/800x400",
      category: "Financial Education"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="bg-blue-600 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Yaper Blog</h1>
          <p className="text-blue-100 mt-2">Financial insights and tips to help you make smarter decisions</p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <button className="text-blue-600 font-medium hover:text-blue-800">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage; 