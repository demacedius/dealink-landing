<script>
  import { onMount } from 'svelte';
  import { supabase } from '../lib/supabaseClient';
  import { Quote, Star } from 'lucide-svelte';

  let freelancerCount = 0;
  let businessProviderCount = 0;

  onMount(async () => {
    const { count: freelancers, error: freelanceError } = await supabase
      .from('freelances')
      .select('*', { count: 'exact', head: true });

    if (freelanceError) {
      console.error('Erreur récupération freelances:', freelanceError);
    } else {
      freelancerCount = freelancers;
    }

    const { count: businessProviders, error: businessProviderError } = await supabase
      .from('porteurs_d_affaire')
      .select('*', { count: 'exact', head: true });

    if (businessProviderError) {
      console.error('Erreur récupération porteurs d\'affaire:', businessProviderError);
    } else {
      businessProviderCount = businessProviders;
    }
  });

  $: totalCount = freelancerCount + businessProviderCount;

  const testimonials = [
    {
      name: "Marie L.",
      role: "Designer UX",
      content: "Enfin une solution pour déléguer sereinement ! J'attends impatiemment le lancement.",
      rating: 5
    },
    {
      name: "Thomas K.",
      role: "Développeur Full-Stack",
      content: "Le concept est génial. Ça va révolutionner notre façon de collaborer entre freelances.",
      rating: 5
    },
    {
      name: "Sophie M.",
      role: "Consultante Marketing",
      content: "J'ai hâte de pouvoir proposer mes surplus de projets à la communauté Dealink.",
      rating: 5
    }
  ];
</script>

<section id=socialproof class="py-16 px-4 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <div class="inline-flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-full mb-6">
            <span class="text-2xl">🏆</span>
            <span class="font-medium text-gray-700">Validé par SAAS PATH • Vainqueur du premier concours</span>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Ils nous font déjà confiance
          </h2>
          <p class="text-lg text-gray-600">
            Rejoignez plus de {totalCount > 0 ? totalCount : '1,200'} professionnels en liste d'attente
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          {#each testimonials as testimonial}
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div class="flex items-center mb-4">
                <Quote class="w-5 h-5 text-blue-500 mr-2" />
                <div class="flex space-x-1">
                  {#each Array(testimonial.rating) as _, i}
                    <Star class="w-4 h-4 text-yellow-400 fill-current" />
                  {/each}
                </div>
              </div>
              <p class="text-gray-600 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div class="font-semibold text-gray-900">{testimonial.name}</div>
                <div class="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          {/each}
        </div>

        <div class="bg-blue-500 rounded-2xl p-8 text-white text-center">
          <h3 class="text-2xl font-bold mb-4">Déjà adopté par la communauté</h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <div class="text-3xl font-bold mb-2">{freelancerCount}</div>
              <div class="text-blue-100">Freelances inscrits</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">{businessProviderCount}</div>
              <div class="text-blue-100">Porteurs d'affaire</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">15+</div>
              <div class="text-blue-100">Secteurs représentés</div>
            </div>
          </div>
        </div>
      </div>
    </section>