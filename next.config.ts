import type {NextConfig} from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "angular.dev",
				port: "",
				pathname: "/assets/images/press-kit/angular_icon_gradient.gif",
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				port: "",
				pathname: "/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				port: "",
				pathname: "/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				port: "",
				pathname: "/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
			},
			{
				protocol: "https",
				hostname: "www.svgrepo.com",
				port: "",
				pathname: "/show/354113/nextjs-icon.svg",
			},
			{
				protocol: "https",
				hostname: "uxwing.com",
				port: "",
				pathname: "/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png",
			},
			{
				protocol: "https",
				hostname: "images.icon-icons.com",
				port: "",
				pathname: "/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png",
			},
			{
				protocol: "https",
				hostname: "git-scm.com",
				port: "",
				pathname: "/images/logos/downloads/Git-Icon-1788C.png",
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				port: "",
				pathname: "/wikipedia/commons/9/91/Octicons-mark-github.svg",
			},
		],
	},
};

export default nextConfig;
