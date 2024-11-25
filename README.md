Kubernetes
===========

1. Install minicube:

> https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fbinary+download

For mac with ARM use this

> curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-arm64
> 
> sudo install minikube-darwin-arm64 /usr/local/bin/minikube

2. Start minicube
> minikube start

3. Enable local registry
> minikube addons enable registry

4. Start MiniCube dashboard
> minikube dashboard


5. Build docker image

> docker build -t my-node-app .

6. Use minikube registry as local
> docker run --rm -it --network=host alpine ash -c "apk add socat && socat TCP-LISTEN:5000,reuseaddr,fork TCP:$(minikube ip):5000"

7. Deploy image to registry
> docker tag my-node-app localhost:5000/my-node-app
>
> docker push localhost:5000/my-node-app

8. Deploy yaml to k8s
> kubectl apply -f resources/k8s/{file}.yaml

9. Enable ingress on k8s
> minikube addons enable ingress
>
> kubectl get pods -n ingress-nginx

10. Minikube tunnel
> minikube tunnel

11. Create cronjob
> kubectl create -f ./resources/k8s/cronjob.yaml

12. Run cronjob manually
> kubectl create job --from=cronjob/callout new-job



