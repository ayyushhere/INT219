<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Website Task</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 flex flex-col min-h-screen">

  <!-- Header -->
  <header class="bg-green-600 text-white py-6">
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-2">Welcome to Your Website Task</h1>
      <nav class="space-x-6">
        <a href="#" class="hover:underline">Home</a>
        <a href="#" class="hover:underline">About</a>
        <a href="#" class="hover:underline">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-1 container mx-auto px-6 py-12">
    <div class="grid md:grid-cols-3 gap-8">
      
      <!-- Left Column -->
      <div class="md:col-span-2 space-y-8">
        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-green-600 font-bold text-xl mb-2">About CSS</h2>
          <p class="text-gray-600">Cascading Style Sheets (CSS) allow you to style and layout your web pages, adding colors, spacing, and more.</p>
        </div>

        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-green-600 font-bold text-xl mb-2">Responsive Design</h2>
          <p class="text-gray-600">Responsive design ensures your webpage looks great on all devices, from desktops to mobile phones.</p>
        </div>
      </div>

      <!-- Right Column -->
      <div>
        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-green-600 font-bold text-xl mb-2">Box Model</h2>
          <p class="text-gray-600">The CSS box model describes the rectangular boxes generated for elements. It includes margins, borders, padding, and the actual content.</p>
        </div>
      </div>
      
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-4">
    <div class="text-center text-sm">
      Created by [Student Name] | Follow us on 
      <a href="#" class="text-green-400 hover:underline mx-1">Instagram</a> | 
      <a href="#" class="text-green-400 hover:underline mx-1">Twitter</a> | 
      <a href="#" class="text-green-400 hover:underline mx-1">LinkedIn</a>
    </div>
  </footer>

</body>
</html>