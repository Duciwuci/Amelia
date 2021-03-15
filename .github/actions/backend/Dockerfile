FROM python:3.7-slim
WORKDIR /

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY ./backend/src /src

# set PYTHONPATH
ENV PYTHONPATH /
ENV FLASK_APP src/main.py

# Run the application
CMD ["flask", "run", "-p", "5000", "-h", "0.0.0.0"]
