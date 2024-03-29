from django.views.generic import TemplateView, FormView
from .models import Solicitud


class Index(FormView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):

        context_index = {
            'title': 'Nuevos Archivos',
            'form_numbers': [x for x in range(0, 6)],
            'lista_solicitudes': Solicitud.objects.all()
        }

        return context_index
