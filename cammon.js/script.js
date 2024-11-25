// Suavizar a rolagem ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajuste para o cabeçalho fixo
                behavior: 'smooth'
            });
        }
    });
});

// Dados do gráfico
const data = [
    {
        x: ['SUV', 'Sedan', 'Hatchback', 'Caminhonetes', 'Elétricos'],
        y: [40, 30, 15, 10, 5],
        type: 'bar',
        marker: {
            color: ['#ff4500', '#ff6a33', '#ff8f66', '#ffb399', '#ffd6cc']
        }
    }
];

// Layout do gráfico
const layout = {
    title: {
        text: 'Vendas por Categoria de Veículos (2024)',
        font: {
            family: 'Russo One, sans-serif',
            size: 24,
            color: '#1f2937'
        }
    },
    xaxis: {
        title: {
            text: 'Categorias',
            font: {
                family: 'Roboto, sans-serif',
                size: 16,
                color: '#1f2937'
            }
        },
        tickfont: {
            size: 14,
            color: '#1f2937'
        }
    },
    yaxis: {
        title: {
            text: 'Porcentagem de Vendas (%)',
            font: {
                family: 'Roboto, sans-serif',
                size: 16,
                color: '#1f2937'
            }
        },
        tickfont: {
            size: 14,
            color: '#1f2937'
        }
    },
    plot_bgcolor: '#f8f9fa',
    paper_bgcolor: '#e3e3e3',
    margin: {
        l: 50,
        r: 50,
        t: 70,
        b: 50
    }
};

// Renderizando o gráfico
Plotly.newPlot('grafico', data, layout);
