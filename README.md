# Node.js Multi-Environment Deployment with Helm, ArgoCD, Docker, and Kubernetes

This repository contains a multi-environment Node.js project deployed using **Docker**, **Kubernetes**, **Helm**, and **ArgoCD**. The project is structured to support **development** and **production** environments with separate configurations for each.

---

## Repository Structure

main/
├─ ArgoCD/
│ ├─ dev-argocd.yaml # ArgoCD application manifest for development environment
│ └─ prod-argocd.yaml # ArgoCD application manifest for production environment


### Branches

- **main**: Contains ArgoCD configuration manifests for all environments.
- **dev**: Contains the Node.js application and Helm chart for the **development environment**.
- **prod**: Contains the Node.js application and Helm chart for the **production environment**.

---

## Folder Details

### `ArgoCD/`

This folder contains **ArgoCD Application manifests** for deploying the project in different environments.

#### `dev-argocd.yaml`

- Defines the ArgoCD application for the **development environment**.
- Points to the `dev` branch of the repository.
- References the Helm chart in `helm/node-app/` and can override values using `values-dev.yaml`.

#### `prod-argocd.yaml`

- Defines the ArgoCD application for the **production environment**.
- Points to the `prod` branch of the repository.
- References the Helm chart in `helm/node-app/` and can override values using `values-prod.yaml`.


## Folder Details

### `ArgoCD/`

This folder contains **ArgoCD Application manifests** for deploying the project in different environments.

#### `dev-argocd.yaml`

- Defines the ArgoCD application for the **development environment**.
- Points to the `dev` branch of the repository.
- References the Helm chart in `helm/node-app/` and can override values using `values-dev.yaml`.

#### `prod-argocd.yaml`

- Defines the ArgoCD application for the **production environment**.
- Points to the `prod` branch of the repository.
- References the Helm chart in `helm/node-app/` and can override values using `values-prod.yaml`.

---
### 1. **Node.js Application**

- Located in the `app/` folder in `dev` branch and `prod-app/` folder in `prod` branch (recommended: unify naming).
- Contains standard Node.js project files:
  - `server.js` – main application entry point
  - `package.json` – project dependencies
  - `package-lock.json` – exact dependency versions
  - `Dockerfile` – Docker image definition

---

### 2. **Helm Chart**

- Located in `helm/node-app/`
- Contains:
  - `Chart.yaml` – chart metadata
  - `templates/` – Kubernetes resource templates
  - `values.yaml` – default values

3. Docker

Builds the Node.js application into a container image.

Docker images can be tagged differently for dev and prod:

# Build Docker image for dev
docker build -t my-node-app:dev ./app

# Build Docker image for prod
docker build -t my-node-app:prod ./prod-app

4. ArgoCD Deployment

ArgoCD automates Kubernetes deployments using GitOps principles.

Steps:

Install ArgoCD in your Kubernetes cluster.

Create applications using the manifests in the ArgoCD/ folder:

# For dev environment
kubectl apply -f ArgoCD/dev-argocd.yaml

# For prod environment
kubectl apply -f ArgoCD/prod-argocd.yaml


ArgoCD will monitor the Git repository and automatically deploy changes from the specified branch and Helm chart values.
