import React from 'react';

// Component: DashboardManage
export default function DashboardManage() {
    return (
        <>
            <div className="hero min-h-screen bg-secondary">
                <div className="hero-content text-center">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-5xl font-bold m-4">Dashboard Manage</h1>

                        <div className="indicator m-5 sm:m-5 md:m-8 lg:m-10 xl:m-12">
                            <div className="indicator-item indicator-bottom">
                                <a className="btn btn-primary" href="/dashboard/user">Go to Crud</a>
                            </div>
                            <div className="card border">
                                <div className="card-body w-60">
                                    <h2 className="card-title">Crud User</h2>
                                    <p>Manager users in sports agents</p>
                                </div>
                            </div>
                        </div>

                        <div className="indicator m-5 sm:m-5 md:m-8 lg:m-10 xl:m-12">
                            <div className="indicator-item indicator-bottom">
                                <a className="btn btn-primary" href="/dashboard/contact">Go to Crud</a>
                            </div>
                            <div className="card border">
                                <div className="card-body w-60">
                                    <h2 className="card-title">Crud Contact</h2>
                                    <p>Manager contacts in sports agents</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
