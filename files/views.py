from django.views.generic import TemplateView


class Index(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):

        context_index = {
            'title': 'Nuevos Archivos',
        }

        return context_index
