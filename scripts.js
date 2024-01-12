// Fetch and display data from XML
function fetchData(xmlPath, sectionId) {
    $.ajax({
        type: 'GET',
        url: xmlPath,
        dataType: 'xml',
        success: function (xml) {
            $(xml).find('item').each(function (){
                const title = $(this).find('title').text();
                const description = $(this).find('description').text();

                //Append data to the specified section
                $(`#${sectionId}`).append(`
                <div class="project">
                <h3>${title}</h3>
                <p>${description}</p>
                </div>
                `);
            });
        },

        error: function (error) {
            console.error('Error fetching XML data:', error);
        }
    })
}

// Fetch and display portfolio data
$(document).ready(function () {
    fetchData('xml/portfolio.xml', 'portfolio-section');
  
    // Add more fetchData calls for other sections (e.g., experience, skills)
  });