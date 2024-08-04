<script>
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('loginForm').addEventListener('submit', function(event) {
                event.preventDefault();
                // Hide login form
                document.querySelector('.login-container').style.display = 'none';
                // Show navbar and content
                document.querySelector('.navbar').style.display = 'flex';
                document.querySelector('.content').style.display = 'block';
            });
        });
    </script>