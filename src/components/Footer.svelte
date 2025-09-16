<script>
    import { Mail, Twitter, Linkedin } from "lucide-svelte";
</script>

<footer class="bg-gray-900 text-white py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-8">
          <div class="flex items-center justify-center space-x-2 mb-4">
            <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10"
                >
                    <rect
                        width="32"
                        height="32"
                        rx="8"
                        fill="#3B82F6"
                        filter="url(#shadow)"
                    />

                    <path
                        d="M8 7h6c4.5 0 8 3.5 8 8s-3.5 8-8 8H8V7z M11 10v12h3c2.5 0 5-2.5 5-6s-2.5-6-5-6h-3z"
                        fill="white"
                        fill-opacity="0.9"
                    />

                    <circle
                        cx="24"
                        cy="12"
                        r="1.5"
                        fill="white"
                        fill-opacity="0.8"
                    />
                    <circle
                        cx="27"
                        cy="15"
                        r="1"
                        fill="white"
                        fill-opacity="0.6"
                    />
                    <circle
                        cx="25"
                        cy="18"
                        r="1"
                        fill="white"
                        fill-opacity="0.6"
                    />

                    <path
                        d="M24 12L27 15M27 15L25 18"
                        stroke="white"
                        stroke-width="1"
                        stroke-opacity="0.5"
                        stroke-linecap="round"
                    />

                    <circle
                        cx="6"
                        cy="25"
                        r="1"
                        fill="white"
                        fill-opacity="0.7"
                    />
                    <circle
                        cx="8"
                        cy="27"
                        r="0.5"
                        fill="white"
                        fill-opacity="0.5"
                    />
                    <path
                        d="M6 25L8 27"
                        stroke="white"
                        stroke-width="0.8"
                        stroke-opacity="0.4"
                        stroke-linecap="round"
                    />
                </svg>
            <span class="text-xl font-bold">Dealink</span>
          </div>
          <p class="text-gray-400 max-w-md mx-auto">
            La plateforme qui connecte les freelances pour une collaboration intelligente et une croissance partagée.
          </p>
        </div>

      
        <div class="flex justify-center space-x-6 mb-8">
          <a href="mailto:contact@dealink.online" class="text-gray-400 hover:text-white transition-colors">
            <Mail class="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">
            <Twitter class="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">
            <Linkedin class="w-5 h-5" />
            
          </a>
        </div>


        <div class="flex flex-wrap justify-center space-x-8 mb-8 text-sm">
          <a href="/about" class="text-gray-400 hover:text-white transition-colors">
            À propos
          </a>
          <a href="/contact" class="text-gray-400 hover:text-white transition-colors">
            Contact
          </a>
          <a href="/terms" class="text-gray-400 hover:text-white transition-colors">
            Conditions d'utilisation
          </a>
          <a href="/privacy" class="text-gray-400 hover:text-white transition-colors">
            Confidentialité
          </a>
        </div>


        <div class="border-t border-gray-800 pt-8 text-center">
          <p class="text-gray-400 text-sm">
            © 2024 Dealink. Tous droits réservés. • Lancement prévu Q3 2025
          </p>
        </div>
      </div>
    </footer>